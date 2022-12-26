import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div className="tarefa_buttons">
            <FaEdit className="edit_button" onClick={(e) => handleEdit(e, index)} />

            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete_button" />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
