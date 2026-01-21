import React, { useState } from "react";

import Input from './components/Input';
import Button from './components/Button';

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    setTodos((prev) => [
      { id: uid(), text: value, done: false },
      ...prev,
    ]);

    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>ToDo</h1>

        <form onSubmit={addTodo} style={styles.form}>
            <Input text={text} onChange={(e) => setText(e.target.value)} placeholder={"Новая задача..."} style={styles.input} />
            <Button type={"submit"} style={styles.btn}>
                Добавить
            </Button>
        </form>

        <ul style={styles.list}>
          {todos.length === 0 ? (
            <li style={styles.empty}>Список пуст</li>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} style={styles.item}>
                <label style={styles.label}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    style={{
                      ...styles.text,
                      ...(todo.done ? styles.textDone : null),
                    }}
                  >
                    {todo.text}
                  </span>
                </label>

                <Button onClick={() => deleteTodo(todo.id)} type={"button"} style={styles.deleteBtn}>
                    ✕
                </Button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 16,
    background: "#0b1020",
    color: "#e8eefc",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
  },
  card: {
    width: "min(560px, 100%)",
    padding: 18,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
  },
  title: {
    margin: "0 0 12px",
    fontSize: 28,
  },
  form: {
    display: "flex",
    gap: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.25)",
    color: "#e8eefc",
    outline: "none",
  },
  btn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(92, 140, 255, 0.35)",
    color: "#e8eefc",
    cursor: "pointer",
    fontWeight: 600,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  },
  empty: {
    opacity: 0.75,
    padding: 10,
    textAlign: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flex: 1,
    cursor: "pointer",
  },
  text: {
    lineHeight: 1.25,
  },
  textDone: {
    textDecoration: "line-through",
    opacity: 0.6,
  },
  deleteBtn: {
    width: 34,
    height: 34,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.08)",
    color: "#e8eefc",
    cursor: "pointer",
    fontSize: 16,
  },
};