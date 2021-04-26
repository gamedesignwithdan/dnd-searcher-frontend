const url5e = "https://api.open5e.com/"

export default class Utils {

    static fetchMeThis = async (category, query) => {
        const url = url5e + category + '/?search=' + query;
        // fetch process
        const response = await fetch(url);
        const json = await response.json();
        return json.results
    }
    
}