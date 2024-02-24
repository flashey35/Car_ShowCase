"use client";

import { CarProps } from "@/Types";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";

interface carCardProps {
  car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [] = useState();

  return (
    <div className="car-card group  ">
      <div className="car-card__container">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;
