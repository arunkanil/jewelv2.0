// import edit from '../../images/edit.svg';
// import deleteIcon from '../../images/deleteIcon.svg';

export function ActionRenderer() {
  // constructor(props) {
  //   super(props);
  //   this.onDelete = this.onDelete.bind(this);
  // }

  // onEdit = () => {
  //   this.props.context.componentParent.handleEdit(this.props.node.data);
  // };
  // onDelete = () => {
  //   this.props.context.componentParent.handleDelete(this.props.node.data);
  // };

  function onRowClicked(event) {
    console.log('Row selected methord.....!!', event);
    console.log('Row selected methord (Obj).....!!', event.data);
    // this.props.history.push({ pathname: this.props.onRowClickPath, state:{id :event.data.id} })
  }
  // render() {
  return `
      <div>
            <a>
              <img src='assets/edit.svg' (click)="onRowClicked()" style="width: 20px; cursor: pointer" alt="delete" />
            </a>
            <a>
              <img src='assets/deleteIcon.svg' style="width: 20px; cursor: pointer" alt="delete" />
            </a>
      </div>
    `;
  // }
}
