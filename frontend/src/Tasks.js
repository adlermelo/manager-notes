import React, { useEffect, useState } from 'react';
import './Tasks.css';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editingTask, setEditingTask] = useState(null);
    const [colorPickerTask, setColorPickerTask] = useState(null);
    const [color, setColor] = useState('#fff');
    const [colorPickerPosition, setColorPickerPosition] = useState({ top: 0, left: 0 });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleCreateTask = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            if (response.ok) {
                fetchTasks();
                setNewTask({ title: '', description: '' });
            } else {
                console.error('Error creating task:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleEditTask = async (task) => {
        try {
            const response = await fetch(`http://localhost:8080/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            if (response.ok) {
                fetchTasks();
                setEditingTask(null);
                setColorPickerTask(null);
            } else {
                console.error('Error editing task:', response.statusText);
            }
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/tasks/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error deleting task:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleFavoriteToggle = async (task) => {
        const updatedTask = { ...task, is_favorite: task.is_favorite ? 0 : 1 };
        await handleEditTask(updatedTask);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({ ...prevState, [name]: value }));
    };

    const handleColorChange = (color) => {
        if (colorPickerTask) {
            const updatedTask = { ...colorPickerTask, color };
            handleEditTask(updatedTask);
            setColorPickerTask(null);
        }
    };

    const openColorPicker = (event, task) => {
        const { left, top, height } = event.target.getBoundingClientRect();
        setColorPickerPosition({
            top: top + height + window.scrollY,
            left: left + window.scrollX,
        });
        setColorPickerTask(task);
        setColor(task.color);
    };

    const closeColorPicker = () => {
        setColorPickerTask(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Função para filtrar tarefas por nome e descrição
    const getFilteredTasks = () => {
        const lowercasedQuery = searchQuery.toLowerCase();
        return tasks.filter(task =>
            task.title.toLowerCase().includes(lowercasedQuery) ||
            task.description.toLowerCase().includes(lowercasedQuery)
        );
    };

    return (
        <div className="tasks-container">
            <header className="header">
                <div className="logo">
                    <img src="/post-it.png" alt="Post-it" className="postit-icon" />
                    <h1>CoreNotes</h1>
                </div>
                <input
                    type="text"
                    placeholder="Buscar notas..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </header>

            <div className="create-task">
                <input
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    placeholder="Título"
                />
                <textarea
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Descrição..."
                />
                <button onClick={handleCreateTask}>Criar Nota</button>
            </div>

            <div className="task-section">
                <h2>Favoritos</h2>
                <div className="tasks-list">
                    {getFilteredTasks().filter(task => task.is_favorite).map(task => (
                        <div
                            key={task.id}
                            className="task-item"
                            style={{ backgroundColor: task.color }}
                        >
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                <button
                                    className="favorite-btn"
                                    onClick={() => handleFavoriteToggle(task)}
                                >
                                    <i className={`bi ${task.is_favorite ? 'bi-star-fill' : 'bi-star'}`}></i>
                                </button>
                            </div>
                            <p>{task.description}</p>
                            <div className="task-actions">
                                <button onClick={() => setEditingTask(task)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                    onClick={(event) => openColorPicker(event, task)}
                                >
                                    <i className="bi bi-paint-bucket"></i>
                                </button>
                                <button onClick={() => handleDeleteTask(task.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="task-section">
                <h2>Outras</h2>
                <div className="tasks-list">
                    {getFilteredTasks().filter(task => !task.is_favorite).map(task => (
                        <div
                            key={task.id}
                            className="task-item"
                            style={{ backgroundColor: task.color }}
                        >
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                <button
                                    className="favorite-btn"
                                    onClick={() => handleFavoriteToggle(task)}
                                >
                                    <i className={`bi ${task.is_favorite ? 'bi-star-fill' : 'bi-star'}`}></i>
                                </button>
                            </div>
                            <p>{task.description}</p>
                            <div className="task-actions">
                                <button onClick={() => setEditingTask(task)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                    onClick={(event) => openColorPicker(event, task)}
                                >
                                    <i className="bi bi-paint-bucket"></i>
                                </button>
                                <button onClick={() => handleDeleteTask(task.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {editingTask && (
                <div className="edit-task">
                    <h2>Editar Nota</h2>
                    <input
                        type="text"
                        value={editingTask.title}
                        onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                        placeholder="Title"
                    />
                    <textarea
                        value={editingTask.description}
                        onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                        placeholder="Description"
                    />
                    <button onClick={() => handleEditTask(editingTask)}>Salvar</button>
                    <button onClick={() => setEditingTask(null)}>Cancelar</button>
                </div>
            )}

            {colorPickerTask && (
                <div className="color-picker" style={{ top: colorPickerPosition.top, left: colorPickerPosition.left }}>
                    {['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9ae3d4', '#a0c4ff', '#b9fbc0'].map((colorHex) => (
                        <div
                            key={colorHex}
                            className="color-swatch"
                            style={{ backgroundColor: colorHex }}
                            onClick={() => handleColorChange(colorHex)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tasks;
