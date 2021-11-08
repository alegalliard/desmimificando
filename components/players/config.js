import { Component } from 'react'
import { AiOutlineUserAdd, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

export default class PlayersConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPlayer: ''
        }

        this.buildProfile = this.buildProfile.bind(this);
        this.newPlayerName = this.newPlayerName.bind(this);
        this.sortPlayers = this.sortPlayers.bind(this);
    }

    newPlayerName(e) {
      //if( e.target.value.length > 3)
        this.setState({newPlayer: e.target.value})
      }
    
      buildProfile(e) {
        e.preventDefault();
        const props = this.props;
        const newPlayer = {name: this.state.newPlayer, score: 0, id: props.players.length};
        props.addPlayer(newPlayer);
        this.setState({
          newPlayer: ''
        })
      }
    
      sortPlayers() {
        let list = this.props.players;
        let min = Math.ceil(0);
        let max = Math.floor(list.length);
    
        for(var i = 0; i < list.length; i++) {
          let rand = Math.floor(Math.random() * (max - min + 1)) + min;
          if(list[i] && list[rand]) {
            let temp = list[i];
            list[i] = list[rand]
            list[rand] = temp;
          }
        }
    
        this.setState({
          players: list
        })    
      }


      render() {
          const list = this.props.players;
          return (
              <>
                <h2>Jogadores &rarr;</h2>
              
              <form onSubmit={this.buildProfile}>
                <input type="text" id="newPlayerName" value={this.state.newPlayer} onChange={this.newPlayerName} />
                <button type="submit" disabled={this.state.newPlayer.length < 3}><AiOutlineUserAdd /></button>
              </form>
              <ol>
                {list.length 
                  ? list.map(player => <li key={player.id}>{player.name} <button onClick={() => this.props.removePlayer(player)} key={player.id}><AiOutlineClose /></button></li>) 
                  : <li>No players yet</li>}
              </ol>
              

              <button type="button" onClick={this.sortPlayers} disabled={list.length < 2}>
                Embaralhar
              </button>

              </>
          )
      }
}