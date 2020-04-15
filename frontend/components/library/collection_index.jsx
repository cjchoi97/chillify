import React from 'react';

class CollectionIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { items } = this.props

    const indexItems = items.map(item => {
      return(
        <div className="item" key={item.id}>
          <img src={item.photoUrl} />
          <div>{item.title}</div>
        </div>
      );
    });

    return (
      <ul className="collection-index">
        {indexItems}
      </ul>
    );
  }
}

export default CollectionIndex;