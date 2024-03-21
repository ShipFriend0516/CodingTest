function solution(new_id) {
    let recommend_id = new_id.toLowerCase();
    recommend_id = recommend_id.replaceAll(/[^a-z0-9-_\.]/g, '')
    recommend_id = recommend_id.replaceAll(/\.+/g,'.')
    recommend_id = recommend_id.replaceAll(/^\.|\.$/g, '')
    recommend_id = recommend_id.length ? recommend_id : 'a'; 
    recommend_id = recommend_id.length >= 16 ? recommend_id.slice(0,15).replace(/\.$/,'') : recommend_id;
    recommend_id = recommend_id.length <= 2 ? recommend_id.concat(recommend_id[recommend_id.length-1].repeat(3-recommend_id.length)) : recommend_id;
    return recommend_id;
}