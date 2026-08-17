import React from 'react';

// Import all car part images directly so Vite bundles them flawlessly
import car1 from '../assets/images/car_1_spark_plug_1786625714315.jpg';
import car2 from '../assets/images/car_2_oil_pump_1786625731971.jpg';
import car3 from '../assets/images/car_3_air_filter_1786625742707.jpg';
import car4 from '../assets/images/car_4_car_battery_1786625753059.jpg';
import car5 from '../assets/images/car_5_water_pump_1786625764695.jpg';
import car6 from '../assets/images/car_6_alternator_1786625777004.jpg';
import car7 from '../assets/images/car_7_starter_motor_1786625787147.jpg';
import car8 from '../assets/images/car_8_brake_pads_1786625797810.jpg';
import car9 from '../assets/images/car_9_brake_rotor_1786625809354.jpg';
import car10 from '../assets/images/car_10_shock_absorber_1786625820739.jpg';
import car11 from '../assets/images/car_11_coil_spring_1786625831753.jpg';
import car12 from '../assets/images/car_12_tire_1786625843957.jpg';
import car13 from '../assets/images/car_13_wheel_rim_1786625854638.jpg';
import car14 from '../assets/images/car_14_radiator_1786625863491.jpg';
import car15 from '../assets/images/car_15_thermostat_1786625873003.jpg';
import car16 from '../assets/images/car_16_timing_belt_1786628653942.jpg';
import car17 from '../assets/images/car_17_fuel_pump_1786628666509.jpg';
import car18 from '../assets/images/car_18_ignition_coil_1786628676776.jpg';
import car19 from '../assets/images/car_19_fuel_filter_1786628684914.jpg';
import car20 from '../assets/images/car_20_cabin_filter_1786628694363.jpg';
import car21 from '../assets/images/car_21_ac_compressor_1786628705138.jpg';
import car22 from '../assets/images/car_22_fuel_injectors_1786628716820.jpg';
import car23 from '../assets/images/car_23_throttle_body_1786628727238.jpg';
import car24 from '../assets/images/car_24_control_arm_1786628774058.jpg';
import car25 from '../assets/images/car_25_cv_axle_1786628785589.jpg';
import car26 from '../assets/images/car_26_ball_joint_1786628796688.jpg';
import car27 from '../assets/images/car_27_transmission_1786628807883.jpg';
import car28 from '../assets/images/car_28_catalytic_conv_1786628819061.jpg';
import car29 from '../assets/images/car_29_oxygen_sensor_1786628830754.jpg';
import car30 from '../assets/images/car_30_clutch_kit_1786628840292.jpg';
import car31 from '../assets/images/car_31_engine_mount_1786628850898.jpg';

const CAR_IMAGES_MAP: Record<string, string> = {
  car_1: car1,
  car_2: car2,
  car_3: car3,
  car_4: car4,
  car_5: car5,
  car_6: car6,
  car_7: car7,
  car_8: car8,
  car_9: car9,
  car_10: car10,
  car_11: car11,
  car_12: car12,
  car_13: car13,
  car_14: car14,
  car_15: car15,
  car_16: car16,
  car_17: car17,
  car_18: car18,
  car_19: car19,
  car_20: car20,
  car_21: car21,
  car_22: car22,
  car_23: car23,
  car_24: car24,
  car_25: car25,
  car_26: car26,
  car_27: car27,
  car_28: car28,
  car_29: car29,
  car_30: car30,
  car_31: car31,
};

interface CarPartSvgProps {
  id: string;
  className?: string;
}

export const CarPartSvg: React.FC<CarPartSvgProps> = ({ id, className = "max-h-48 sm:max-h-56 w-auto object-contain rounded-xl drop-shadow-md" }) => {
  // Extract canonical car key (e.g. "car_16" from "car_16", "16", or "/car_parts/car_16.jpg")
  let cleanKey = id || 'car_16';
  if (cleanKey.includes('/')) {
    const match = cleanKey.match(/car_(\d+)/);
    if (match) {
      cleanKey = `car_${match[1]}`;
    }
  } else if (!cleanKey.startsWith('car_') && !isNaN(Number(cleanKey))) {
    cleanKey = `car_${cleanKey}`;
  }

  const imageSrc = CAR_IMAGES_MAP[cleanKey] || `/car_parts/${cleanKey}.jpg` || car16;

  return (
    <img
      src={imageSrc}
      alt="صورة قطعة السيارة"
      className={className}
      onError={(e) => {
        const target = e.currentTarget;
        // If bundled image fails for any reason, fallback to public folder
        if (target.src !== `/car_parts/${cleanKey}.jpg`) {
          target.src = `/car_parts/${cleanKey}.jpg`;
        }
      }}
    />
  );
};
