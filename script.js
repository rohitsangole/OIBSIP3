const inputCelcius = document.querySelector("#celcius");
const inputKelvin = document.querySelector("#kelvin");
const inputFareh = document.querySelector("#fareh");

//------------------------ Converts kelvin to celcius--------------------------------------------
const ConvertKtoC = function () {
  const getKtoC = inputKelvin.value - 273.15;
  return (inputCelcius.value = getKtoC);
};

// ------------------------convert kelvin to farehnite------------------------------------------

const ConvertKtoF = function () {
  const getKtoF = (inputKelvin.value - 273.15) * (9 / 5) + 32;
  return (inputFareh.value = getKtoF);
};

// ------------------------convert celcius to kelvin------------------------------------------

const ConvertCtoK = function () {
  const getCtoK = Number(inputCelcius.value) + 273.15;
  return (inputKelvin.value = getCtoK);
};

// ------------------------convert celcius to fareh------------------------------------------

const ConvertCtoF = function () {
  const getCtoF = (inputCelcius.value * 9) / 5 + 32;
  return (inputFareh.value = getCtoF);
};

// ------------------------convert fareh to celcius------------------------------------------

const ConvertFtoC = function () {
  const getFtoC = (inputFareh.value - 32) * (5 / 9);
  return (inputCelcius.value = getFtoC);
};

// ------------------------convert fareh to kelvin------------------------------------------

const ConvertFtoK = function () {
  const getFtoK = (inputFareh.value - 32) * (5 / 9) + 273.15;
  return (inputKelvin.value = getFtoK);
};
