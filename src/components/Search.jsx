import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Search = ({ totalPost, onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="my-3">
      {/* Input Pencarian */}
      <InputGroup>
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Cari artikel..."
          value={search}
          onChange={handleChangeSearch}
        />
      </InputGroup>

      {/* Hasil Pencarian */}
      <small className="text-muted mt-2 d-block">
        Ditemukan <b>{totalPost}</b> artikel dengan kata kunci: <b>{search}</b>
      </small>
    </div>
  );
};

export default Search;
