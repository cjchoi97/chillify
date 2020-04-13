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
        <li className="item" key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.photoUrl} />
        </li>
      );
    });

    return (
      <ul className="items-index">
        {indexItems}
      </ul>
    );
  }
}

export default CollectionIndex;