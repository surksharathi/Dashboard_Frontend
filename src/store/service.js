import axios from 'axios';

export function getPost(){
   
  return axios.get(
    `https://infinite-journey-35171.herokuapp.com/articles`
  ).then(
    response => {
    return { ...response };
    }
  ).catch(
    err => {
      throw err;
    }
  );
}
export function postCollection(){
   
    return axios.post(
      `https://infinite-journey-35171.herokuapp.com/articles`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }

  export function deleteCollection(){
   
    return axios.delete(
      `https://infinite-journey-35171.herokuapp.com/articles`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }
  export function expiredCollection(){
   
    return axios.put(
      `https://infinite-journey-35171.herokuapp.com/expiredDocument`
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }
  export function expiredOneCollection(id){
   console.log("service folder id",id)
    return axios.put(
      `https://infinite-journey-35171.herokuapp.com`,{id:id}
    ).then(
      response => {
      return { ...response };
      }
    ).catch(
      err => {
        throw err;
      }
    );
  }

