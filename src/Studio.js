import React, { Component } from 'react';
import style from './style/Studio.module.css';
import $ from 'jquery';
import Content from './Content';

class Studio extends Component {
    state = {
        box: [
            {id: 'box1', name: 'A-1 Pictures', state: 0},
            {id: 'box2', name: 'Bones', state: 0},
            {id: 'box3', name: 'Mad House', state: 0},
            {id: 'box4', name: 'Wit Studio', state: 0},
        ],
        content: <></>,
    }

    toggle = async (id, i) => {
        let copy = [...this.state.box];
        let which;
        let verify = copy.some(e => {
            if (e.state === 1) {
                which = e;
                return e.state === 1
            } else {
                return e.state === 1
            }
        }); 
        
        // console.log(which)
        await this.updateState(i);
        if(verify) {
            let iContent = parseInt(which.id[3]) - 1
            // console.log( $(`#content${iContent}`) )
            $(`#content${iContent}`).animate({height: '0px'}, 500, 'swing', () => {
                setTimeout(() => {
                    copy[copy.indexOf(which)].state = 0;
                    this.setState({box: copy});
                }, )
            });
        }
        $(`${id} + div`).animate({height: '400px'}, 500, 'swing');
    }

    updateState = (i) => new Promise( (resolve, reject) => {
        let copy = [...this.state.box];
        console.log(this.state.box);
        copy[i].state = 1;
        resolve(this.setState({box: copy}));
    })
    

    render() {
        return (
            <main className={style.main}>
                {this.state.box.map( (e, i) =>
                <>
                    <div className={style.box} id={e.id} key={e.id} 
                    onClick={() => this.toggle('#'+e.id, i)}>
                        <h2 key={'h2'+i}>{e.name}</h2>
                    </div>

                    {(() => {
                        if(this.state.box[i].state === 1) { 
                        return <Content key={'content'+i} index={i} id={'content'+i} />
                    }
                        else return;
                    })()}

                </> 
                )}
            </main>
        )
    }
}

export default Studio