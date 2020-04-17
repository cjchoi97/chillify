import React from 'react';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchItems();
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.items).length !== Object.values(prevProps.items).length) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  render() {
    const { items, currentUser, itemType } = this.props
    const filteredItems = Object.values(items).length > 0 ? currentUser.playlistIds.map(id => {
      return items[id]
    }) : [];
    // debugger

    const indexItems = filteredItems.map(item => {
      return(
        <div className="item" key={item.id}>
          <img src={item.photoUrl} />
          <div>{item.title}</div>
        </div>
      );
    });

    // debugger

    return (
      <div className="collections">
        <h1 className="collection-type-text">{itemType}</h1>
        <div className="collection-index">
          {indexItems}
        </div>
      </div>
    );
  }
}

export default CollectionIndex;