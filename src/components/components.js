import React from "react";
import lapis from '../assets/icons/lapis/lapis.png';
import lixeira from '../assets/icons/lixeira/lixeira.png';

let contacts = [
    {id: 1, nome: 'Ajalmar', fone: '8888-7777', ações: ''},
    {id: 2, nome: 'Claudia', fone: '9999-4444',ações: ''},
    {id: 3, nome: 'Betinho', fone: '9876-3333',ações: ''},
    {id: 4, nome: 'Ana Julia', fone: '9855-3333',ações: ''}, 
    {id: 5, nome: 'Bia Julia', fone: '9755-3333',ações: ''}  
 ];

export class AddButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {estado: false};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;
        
        contacts.push({id: contacts[contacts.length - 1].id + 1, nome: name, fone: phone, ações: ''});
        this.setState({estado: false});
    }

    onClick() {
        this.setState({estado: true});
    }

    render(){
        let estado = this.state.estado

        return(
            <div>
                {
                !estado &&
                <button className="newUser" onClick={() => this.onClick()}>NOVO USUARIO</button>
                }

                {
                estado &&
                <form onSubmit={this.handleSubmit} className="formStyle">
                    <input type="text" name="name" placeholder="Enter Name"/>
                    <input type="text" name="phone" placeholder="Enter Phone"/>
                    <button type="submit" className="newUser1">ADD</button>
                </form>
                }
            </div>
        );
    }
}

function IsAction(props)
{
    let id = props.id;
    let campo = props.keys_t;

    return( campo === 'ações' ? <th><ImageEdit id={id}/></th> : <th>{props.value}</th> );
}

class ImageEdit extends React.Component
{
    constructor(props){
        super(props);
        this.state = {allObj: contacts, edit: false, index: null, editObject: {}, nomeForm: '', foneForm: ''};

        this.ClickButtonDelete = this.ClickButtonDelete.bind(this);
        this.ClickButtonEdit = this.ClickButtonEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeNameForm = this.onChangeNameForm.bind(this);
        this.onChangeFoneForm = this.onChangeFoneForm.bind(this);
    }

    ClickButtonDelete(){ // método responsável por deletar cada campo
        for (let i = 0; i < contacts.length; i++) {
            if( this.props.id === contacts[i].id){
                contacts.splice(i, 1);
            }
            
        }
    }

    ClickButtonEdit(){ // método responsável por editar cada campo
        // Vamos usar só um indice aqui para editar
        // Vamos modificar apenas editObject aqui 
        let editObject;
        let index;

        for (let i = 0; i < contacts.length; i++) {
            if( this.props.id === contacts[i].id){
                editObject = contacts[i];
                index = i;
                break;
            }
        }

        this.setState({editObject: editObject, index: index, edit: true});
        this.setState({nomeForm: editObject.nome, foneForm: editObject.fone});
    }

    onChangeNameForm(e) {
        this.setState({nomeForm: e.target.value});
    }

    onChangeFoneForm(e) {
        this.setState({foneForm: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;

        this.setState({edit: false});
        contacts[this.state.index] =  {id: this.props.id, nome: name, fone: phone, ações: ''};
    }

    render() { 
    return(
        <>
            {
                !this.state.edit &&
                <>
                    <button onClick={() => this.ClickButtonEdit()} className='actButtonLapis' ><img alt='lapis' type='image' src={lapis} /></button>
                    <button onClick={this.ClickButtonDelete} className='actButtonLixeira'><img alt='lixeira' type='image' src={lixeira} /></button>
                </>
            }

            {
                this.state.edit &&
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTabela" type="text" name="name" onChange={this.onChangeNameForm} value={this.state.nomeForm} placeholder="Enter Name"/>
                    <input className="inputTabela" type="text" name="phone" onChange={this.onChangeFoneForm} value={this.state.foneForm} placeholder="Enter Phone"/>
                    <button type="Submit">EDIT</button>
                </form>
            }
        </>

    );
    }
}

function Coluna(props)
{   // montando o cabeçalho da tabela.
    let column = props.campos.map( (campo) =>  <th>{campo}</th> );

    return (
        <tr>{column}</tr>
    );
}
  
function LinhaDeDados(props)
{   // passando cada objeto

    let id = props.objeto.id;
    let keys = Object.keys(props.objeto);
    let element_formated = [];

    keys.forEach( (key) => 
        element_formated.push( 
            <IsAction value={props.objeto[key]} keys_t={key} id={id}/> )
    );

    return (
        <tr>{element_formated}</tr>
    );
}
  
export class Tabela extends React.Component {
    // classe responsavel por renderizar toda a tabela.
    constructor(props){
        super(props);
        this.state = {allObj: contacts, edit: false};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    

    tick(){
        this.setState({allObj: contacts});
    }

    render(){
        let fields = []; // é cada linha de dados.
        let colunas = Object.keys(this.state.allObj[0]); // pegando todas as colunas da tabela.
        
        if(this.state.allObj)// definindo linhas de dados.
        {
            this.state.allObj.forEach( (objeto) => fields.push( <LinhaDeDados objeto={objeto} />)); 
        }
        
        return (
            <table className="ConteudoTabela">
                <thead>
                    <Coluna campos={colunas}/>
                </thead>
                
                <tbody>
                    {fields}
                </tbody>
            </table>
        );
    }
}