class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const document = new this.model(data);
        return await document.save();
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async findByIdWithAttributes(id, attributes) {
        return await this.model.findById(id).select(attributes);
    }

    async findOne(query) {
        return await this.model.findOne(query);
    }

    async findAll(query = {}) {
        return await this.model.find(query);
    }

    async updateById(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteById(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

export default BaseRepository;
