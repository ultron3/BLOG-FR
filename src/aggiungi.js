import { html,render } from "./lib/lit-html.js";
import {Router} from "./lib/vaadin-router.js";

const createPost = async(data) =>{
    return fetch ('http://localhost:5000/jsonposts',{
        method:'post',
        mode:'cors',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)

    })
}
export default class Home extends HTMLElement{
    constructor(){
        super();
    }

    getRoot(){
        return this;
    }

    connectedCallback(){
        render(this.renderView(),this.getRoot());
    }
    renderView(){
        return html`
        <form id="frm1" align="central" action="home.html">
        
        <select name="category" id="cat">
          <option value="scienze">scienze</option>
          <option value="news">news</option>
          <option value="storia">storia</option>
          <option value="geografia">geografia</option>
          <option value="medicina">medicina</option>
      </select>
        <input type="text" value="">
        <input type="text" value="">
        <input type="text" value="">
        <BR><BR>
        <input type="button" onclick="myjson()" value="Carica post json">
        <input type="button" onclick="mySubmit()" value="Aggiungi nuovi post">
        <input type="button" onclick="myFunction()" value="reset">
        <br><br>
       </form>
        `;
    }
    create(p){
        p.preventDefault();
        console.dir(p);
        const {form} = p.target
        if(!form.checkvalidity()){
            form.reportvalidity();
            return;
        } else{
            createPost(this.data)
            .then(_ =>{
                Router.go('/jsonposts');
            })
        }
    }

    onInputChange(e){
        const {name,value}=e.target;
        this.data[name]=value;
    }










}

customElements.define("post-list", newpost);
