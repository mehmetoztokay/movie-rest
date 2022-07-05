class base {
  constructor(model) {
    this.model = model
  }

  // Get all objects
  async loadAll() {
    const loaded = this.model.find()
    return loaded
  }

  // Get an object
  async loadOne(objectId) {
    const loaded = this.model.findById(objectId)
    return loaded
  }

  // Create an object
  async insertOne(object) {
    return this.model.create(object)
  }

  async updateOne(objectId, object) {
    return this.model.findOneAndUpdate({ _id: objectId }, object)
  }
}

module.exports = base
