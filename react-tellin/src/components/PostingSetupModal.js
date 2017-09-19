import React, {Component} from 'react';
import '../css/PostingSetupModal.css';

export default class PostingSetupModal extends Component {
  render() {
    return (
          <div className="modal">
              <ModalHeader title="게시물 설정"/>
              <ModalContent/>
              <ModalFooter/>
          </div>
    )
  }
}

const ModalHeader = props => {
  return (
      <div className="modal-header">
        <button type="button">X</button>
        <h3>{props.title}</h3>
      </div>
  )
};

const ModalContent = props =>{
  return(
      <div className="modal-content">
        <RadioButtonList radioList={["허용", "비허용"]} listName="댓글작성 여부"/>
        <RadioButtonList radioList={["허용", "비허용"]} listName="공감 여부"/>
        <CheckboxList checboxListName ="카테고리" checkboxList={[{value: '연애소통',id:'love'},{value: '가족소통',id:'family'},{value: '친구소통',id:'friends'},{value: '금전소통',id:'money'},{value: '기타소통',id:'etc'}]}/>
        <FileUploader/>
      </div>
  )
};

const ModalFooter = props =>{
  return(
      <div className="modal-footer">
        <button type="button">등록</button>
        <button type="button">취소</button>
      </div>
  )
};

class RadioButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedRadio: undefined
    };
    this.changeRadioChecked = this.changeRadioChecked.bind(this);
  }

  render() {
    return (
        <div className="radio-btn-list">
          <h4>{this.props.listName}</h4>
          {this.props.radioList.map((value, index) => {
            return (
                <div className="radio-btn" key={index}>
                  <input type="radio" name={this.props.listName} id={this.props.listName + index.toString()}/>
                  <label htmlFor={this.props.listName + index} onClick={this.changeRadioChecked}
                         className="radio-label"
                         style={this.state.checkedRadio === this.props.listName + index.toString() ?
                             {
                               backgroundColor: '#f093fb',
                               color: '#fff',
                               border: '1px solid #f093fb'
                             } : {
                               backgroundColor: '#fff',
                               color: '#cacaca',
                               border: '1px solid #f1f1f1'
                             }}>{value}</label>
                </div>
            )
          })}
        </div>
    )
  }

  changeRadioChecked(event) {
    if (event.target.previousSibling.checked === false) {
      this.setState({
        checkedRadio: event.target.previousSibling.id
      });
    }
  }
}

const CheckboxList = props => {
  return (
      <div className="checkbox-list">
        <h4>{props.checboxListName}</h4>
        {props.checkboxList.map((checkbox, index)=>{
          return (<Checkbox key={index} id={checkbox.id} value={checkbox.value}/>)
        })}
      </div>
  )
};

class Checkbox extends Component {
  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = {
      isChecked : false
    }
  }

  clicked(event) {
    this.setState({isChecked:!this.state.isChecked});
  }

  render() {
    return (
        <div className="checkbox" style={this.state.isChecked? {backgroundColor:'#f2f2f2'}:{backgroundColor:'#fff'}}>
          <input type="checkbox" id={this.props.id.trim()} value={this.props.value} onChange={this.clicked} draggable={false}/>
          <label htmlFor={this.props.id}>{this.props.value}</label>
        </div>
    );
  }
}

const FileUploader = () =>{
  return(
      <div className="file-uploader">
        <h4>파일첨부</h4>
        <input type="file" name="file"/>
        <div className="attach-file" onClick={clicked}>파일 첨부</div>
      </div>
  )
  function clicked (event){
    event.target.previousSibling.click();
  }
};