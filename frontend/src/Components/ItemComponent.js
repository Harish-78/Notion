// components/ItemComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../actions/itemActions';

const ItemComponent = () => {
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const handleAddItem = () => {
    dispatch(addItem({ id: Date.now(), name: newItem }));
    setNewItem('');
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemComponent;
