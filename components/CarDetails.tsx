import { CarProps } from "@/Types";
import React from "react";
interface carDetailsPropos {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car }: carDetailsPropos) => {
  return <div></div>;
};

export default CarDetails;
