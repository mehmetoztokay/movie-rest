const base = require('./base')
const Director = require('../models/Director')

class director extends base {
  loadAll() {
    console.log('calisti')
    return Director.aggregate([
      {
        $lookup: {
          from: 'movies',
          localField: '_id',
          foreignField: 'directorId',
          as: 'listedmovies'
        }
      },
      {
        $unwind: {
          path: '$listedmovies',
          preserveNullAndEmptyArrays: true
          // Herhangi bir filmi olmayan yonetmenlerin de listelenmesi icin gerekiyor.
        }
      },
      {
        $group: {
          _id: {
            _id: '$_id',
            name: '$name',
            surname: '$surname',
            bio: '$bio'
            // Bu alandaki keyler aldigimizda karsimiza cikacak isimlendirmeler. Yani degistirebiliriz kendimize gore.
          },
          listedmovies: {
            $push: '$listedmovies'
          }
          // Grouplama yapmazsak yonetmenin her filmi icin tekrar tekrar yonetmeni gosterir. Tek yonetmen icin listelenen filmleri gostermek icin gruplama yapmaliyiz.
        }
      },
      {
        $project: {
          _id: '$_id._id',
          name: '$_id.name',
          surname: '$_id.surname',
          bio: '$_id.bio',
          listedmovies: '$listedmovies'
          // Eger project'i eklemezsek bir ustteki group'taki gibi gorunecekti. Yani _id objesi altinda obje sonra bir daha listedmovies objesi.
        }
      }
    ])
  }
}

module.exports = new director(Director)
