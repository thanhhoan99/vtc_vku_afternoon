import "./App.css";
import React from "react";
import SearchButton from "./components/SearchButton";
import {  Search } from 'react-feather';
import { AirVent ,Phone,ListMusic ,AlignStartVertical  } from 'lucide-react';

function App() {
  return (
    <div>
      <SearchButton leftIcon={<Search size={16} />}  />
      <SearchButton leftIcon={<Search size={16} />} label={"Search"} />
      <SearchButton leftIcon={<Search size={16} />} labelText={"Textfield"}   />
      <SearchButton leftIcon={<Search size={16} />} label={"Search in the web"} rightIcon={<AirVent size={16} />} />
      <SearchButton leftIcon={<Search size={16} />} label={"Search"}  rightIcon={<Phone size={16}  />}/>
      <SearchButton leftIcon={<Search size={16} />} label={"Search crypto"}  rightIcon={<ListMusic  size={16} />}/>
      <SearchButton  label={"Phone number"}  rightIcon={<Phone size={16} style={{ backgroundColor: "green", borderRadius: "4px", padding: "4px" }} />}/>
      <SearchButton leftIcon={<Search size={16} />} label={"Search the web"}  rightIcon={<AlignStartVertical  size={16} style={{ backgroundColor: "yellow", borderRadius: "4px", padding: "4px" }}/>}/>

    </div>
  );
}

export default App;
