class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '') 
  }

  static titleize(string) {
    //capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from
    // and always capitalizes the first word.
    let exceptWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(" ")
    let caps = array.map(word => {
      if (!exceptWords.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    caps[0] = this.capitalize(caps[0])
    return caps.join(" ")
  }
}

