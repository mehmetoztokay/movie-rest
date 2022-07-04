class base {
  constructor(model) {
    this.model = model
  }

  async loadAll() {
    const loaded = this.model.find()
    return loaded
  }

  async insertOne(object) {
    return this.model.create(object)
  }
}

module.exports = base
