export const exercisesOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'dc811aafffmsh7cf2c61db109937p1ffcfajsne527db6bea89',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();


    return data;
}

