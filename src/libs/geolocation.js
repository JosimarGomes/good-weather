class Geolocation {
  constructor() {
    const geolocation = navigator.geolocation;
    if (!geolocation) {
      throw Error('Geolocation is not supported');
    }

    this.geolocation = geolocation;      
  }

  getCurrentPosition() {
    return new Promise((resolve) => {
      this.geolocation.getCurrentPosition(({ coords }) => resolve(coords)) 
    })
    
  }
}

export default new Geolocation();