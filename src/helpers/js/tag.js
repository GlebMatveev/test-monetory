const addTag = (tagsArray, item) => {
  let isTag = false

  for (let key in tagsArray) {
    if (tagsArray[key] === item) {
      isTag = true
    }

    if (isTag) break
  }

  if (!isTag) {
    tagsArray.push(item)
  }

  return tagsArray
}

const deleteTag = (tagsArray, item) => {
  let isTag = false

  for (let key in tagsArray) {
    if (tagsArray[key] === item) {
      const index = tagsArray.findIndex((it) => it === item)
      if (index !== -1) {
        tagsArray.splice(index, 1)
      }

      isTag = true
    }

    if (isTag) break
  }

  return tagsArray
}

const calcTagStatus = (tagsArray, item) => {
  for (let key in tagsArray) {
    if (tagsArray[key].toLowerCase() === item.toLowerCase()) return true
  }
  return false
}

export default {
  addTag,
  deleteTag,
  calcTagStatus
}
