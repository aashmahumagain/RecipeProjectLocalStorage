import React, { useState } from "react";

function useLocalAdd() {
  function getReceipeDetails() {
    return JSON.parse(localStorage.getItem("Added item"));
  }
  const [recipedetail, setRecipe] = useState(getReceipeDetails());

  function setRecipeDetails(vals) {
    const prevDetails = recipedetail;
    let newArray = [];
    // console.log(vals)
    let details = 1;
    if (prevDetails !== null && prevDetails.length > 0) {
      const ARRLEN = prevDetails.length;
      details = prevDetails[ARRLEN - 1].id + 1;
      newArray.push(...prevDetails);
    }
    vals.id = details;
    newArray.push(vals);
    // console.log(newArray);
    localStorage.setItem("Added item", JSON.stringify(newArray));
    setRecipe(newArray);
  }

  function removeDetails(newArray) {
    localStorage.setItem("Added item", JSON.stringify(newArray));
    setRecipe(newArray);
    console.log(newArray, "newarrara");
  }

  function updateDetails(newArray) {
    localStorage.setItem("Added item", JSON.stringify(newArray));
    setRecipe(newArray);
  }

  return {
    recipedetail,
    setR: setRecipeDetails,
    removeR: removeDetails,
    updateR: updateDetails,
  };
}

export default useLocalAdd;
