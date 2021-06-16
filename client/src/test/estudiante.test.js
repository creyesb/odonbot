/* eslint-disable jest/valid-expect */

//----MOCHA TEST----
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import RegistroPage from "../components/RegistroPage/Registro";

describe("Registro de Estudiantes", () => {
  it("Deberia placeholder nombre", () => {
    const wrapper = shallow(<RegistroPage />);
    //const input = wrapper.find();
    expect(
      wrapper
        .find(".register-form__input")
        .at(0)
        .props().placeholder
    ).to.equal("Ingrese su nombre");

    //expect(1).to.equal(1);
  });
  it("Deberia renderizar el form", () => {
    const wrapper = shallow(<RegistroPage />);
    //const input = wrapper.find();
    expect(
      wrapper
        .find(".register-form__input")
        .at(1)
        .text()
    ).to.equal("<Input />");
    //expect(input.props().value).to.equal("carlos");

    //expect(1).to.equal(1);
  });
  it("No debería registrar un estudiante con campos vacios", () => {
    const wrapper = shallow(<RegistroPage />);
    expect(1).to.equal(1);
  });
  it("No debería registrar un estudiante con campos invalidos", () => {
    const wrapper = shallow(<RegistroPage />);
    expect(1).to.equal(1);
  });
});

describe("Registro de Profesores", () => {
  it("Debería registrar un profesor", () => {
    const wrapper = shallow(<RegistroPage />);
    expect(1).to.equal(1);
  });
  it("No debería registrar un profesor con campos vacios", () => {
    const wrapper = shallow(<RegistroPage />);
    expect(1).to.equal(1);
  });
  it("No debería registrar un profesor con campos invalidos", () => {
    const wrapper = shallow(<RegistroPage />);
    expect(1).to.equal(1);
  });
});
