import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class ComTest extends Component {
    
        state = {
          value: '',
          techList:["react","js","html","css"],
          showList:[]
        }
      
        // checkList=(e)=>{
        //     var val = e.target.value
        //     if (this.state.techList.includes(val)){
        //         var tempList = this.state.showList.slice()
        //         tempList.push(val)
        //         this.setState({showList:tempList})
        //     }
        // }

      
    render() {
        return (
            <div>

                {/* <input type="text" onChange={this.checkList}/>
                <div>titlee</div> */}
                <Autocomplete
                style={{width:"400px", backgroundColor:"red"}}
        items={[
          { label: 'foo' },
          { label: 'bar' },
          { label: 'baz' },
        ]}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
            </div>
        )
    }
}
