import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../../../pages/test123";

describe("Index testing", () => {

    test("Should render content correctly", () => {
        const name = 'Nita'
      render(<Index name={name}/>);
  
        const cards = screen.getByTestId("hi~");
   
        expect(cards).toHaveTextContent('HI');
        expect(cards).toHaveTextContent(name);

      });

    });
  
   
