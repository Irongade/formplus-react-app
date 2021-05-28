import React, {useState, useEffect, useRef} from "react"
import {createGlobalStyle, ThemeProvider } from "styled-components";
import {normalize} from "styled-normalize";

//service
import TemplateService from "./services/index";

// components
import Header from "./components/Header";
import Alert from "./components/Alert";
import TemplateList from "./components/TemplateList";
import Pagination from "./components/Pagination";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    ::-webkit-scrollbar {
      width: 10px;
      height: 50px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
  @font-face {
   font-family: Circular_Std;
   src: url('./assets/Circular Std Font.otf') format('otf');
   
   font-weight: 700;
  }
  body {
    font-family: Circular_Std, sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [templates, setTemplates] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const categorySelectRef = useRef(null);
  const orderSelectRef = useRef(null);
  const dateSelectRef = useRef(null);

  useEffect(
    () => {
      async function fetchTemplates() {
        try {
          setIsLoading(true)
          const response = await TemplateService.fetchTemplates()
          const filteredResponses = response.filter(res => res.category.length === 1)
          setTemplates(filteredResponses)
          setFilteredResults(filteredResponses)
          // localStorage.setItem("templates", filteredResponses);
        } catch(err) {
          console.log(err)
        }
        setIsLoading(false)
      }
      fetchTemplates()
    }, [])

    useEffect(()=> {
      if(inputValue === "") return handleFilter(); 
    }, [inputValue])

    const handleFilter = () => {
      let filteredTemplates = templates;
      const category = categorySelectRef.current.value;
      const order = orderSelectRef.current.value;
      const date = dateSelectRef.current.value;

      if (category !== "All"){
        filteredTemplates = filteredTemplates.filter(
            (template) => template.category[0] === category
        );
      }
      if (order !== "Default") {
        filteredTemplates = [...filteredTemplates.sort((a, b) => a.name.localeCompare(b.name))]
          if (order === 'Descending') filteredTemplates.reverse();
      }
      if(date !== "Default") {
        filteredTemplates = [...filteredTemplates.sort((a, b) => a.created.localeCompare(b.created))] // return new Date(b.date) - new Date(a.date);
        if (date === 'Descending') filteredTemplates.reverse();
      }

      filteredTemplates = filteredTemplates.filter(template => template.name.includes(inputValue));

      setFilteredResults(filteredTemplates)
    }

    const handleInputChange = (value) => {
        setInputValue(value)
        handleFilter()
    }

  const darkTheme = {
    background: "#0d1117",
    text: "#c9d1d9",
    alertText: "#252525",
    headerText: "#5a86ff",
    shadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1),0 4px 6px -2px rgba(255, 255, 255, 0.05)",
    inputText: "#8b949e",
    selectText: "#8b949e",
    paginationText: "#c9d1d9",
    templateDivDarkBg: "#c9d1d9",
    green: "#08BD37"
  }
  
  const lightTheme = {
    background: "#fff",
    text: "#3F3E3E",
    alertText: "#252525",
    headerText: "#333447",
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    inputText: "#8F8B8B",
    selectText: "#3F3F3F",
    paginationText: "#3F3F3F",
    templateDivDarkBg: "#F9F9F9",
    green: "#08BD37"
  }

  return (
   <ThemeProvider theme={toggleDarkMode === true ? darkTheme : lightTheme}>
     <GlobalStyle />
     <Header 
        handleFilter={handleFilter} 
        inputValue={inputValue} 
        handleInputChange={handleInputChange} 
        categorySelectRef={categorySelectRef} 
        orderSelectRef={orderSelectRef} 
        dateSelectRef={dateSelectRef} 
        setToggleDarkMode={setToggleDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
     <Alert />
     <TemplateList categorySelectRef={categorySelectRef} filteredResults={filteredResults} isLoading={isLoading} />
     <Pagination />
   </ThemeProvider>
  );
}

export default App;
