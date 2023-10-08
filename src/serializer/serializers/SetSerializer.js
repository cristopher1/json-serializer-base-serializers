import Serializer from '../Serializer'

class SetSerializer extends Serializer {
  /** Serializer used to serialize and unserialize Sets. */
  constructor() {
    super('Set')
  }

  serialize(unserializedData) {
    const serializedData = {
      value: Array.from(unserializedData),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = new Set(value)
    return parsedData
  }
}

export default SetSerializer