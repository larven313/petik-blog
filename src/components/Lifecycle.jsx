import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1 Constructor: Komponen dibuat");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("2 componentDidMount: Komponen sudah dirender ke DOM");

    // Perubahan pada DOM: Mengubah teks button, warna teks, dan background button setelah komponen dimount
    document.getElementById("btn").textContent = "Klik untuk Tambah";
    document.getElementById("btn").style.backgroundColor = "#3674B5";
    document.getElementById("btn").style.color = "#fff";
    
    // Perubahan pada DOM: Menambahkan warna latar belakang
    document.body.style.backgroundColor = "#f5f5f5";
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("3 componentDidUpdate: Komponen diperbarui", prevState.count, "->", this.state.count);
  }

  componentWillUnmount() {
    console.log("4 componentWillUnmount: Komponen akan dihapus");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render: Komponen sedang dirender");
    return (
      <div>
        <h2>React Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button id="btn" onClick={this.increment}>Tambah</button>
      </div>
    );
  }
}

export default Lifecycle;
