export default {
    findAll() {
        
        const headers = new Headers({
            'X-Parse-Application-Id': 'A9lBJIHufJO5Bbs6Hwdxhny0IcHV5J1KFbHK9kCo',
            'X-Parse-REST-API-Key': 'yjqy3Q3oYrmS5mxE7M0bQE97R51Qj88R3Ah82ujx'
          });

        const fetchData = { 
            method: 'GET',
            headers
        }

        return fetch('https://parseapi.back4app.com/classes/Todo', fetchData)
        .then(response => response.json());
    }
}