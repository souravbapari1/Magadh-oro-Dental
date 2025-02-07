import React from "react";

function ServicesListCard() {
  return (
    <div className="w-full bg-gradient-to-tr  from-primary to-primary/80   rounded-3xl p-7 px-8">
      <h5 className="text-white text-2xl font-bold">Our Services</h5>
      <div className="py-3">
        <ul className="list-disc pl-4 space-y-2 text-white text-sm">
          <li>Orthodontic Treatment</li>
          <li>Cosmetic Dentistry at Patna</li>
          <li>Advanced Root Canal Treatment</li>
          <li>Prosthetic Dentistry</li>
          <li>Dental Implants</li>
          <li>Pediatric Dentistry</li>
          <li>Professional Aligners</li>
          <li>Laser Teeth Whitening</li>
          <li>Full Mouth Rehabilitation</li>
          <li>Periodontal Treatment</li>
          <li>Smile Design</li>
          <li>Oral & Maxillofacial Surgery</li>
          <li>Geriatric Dentistry</li>
          <li>Laser Dentistry</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesListCard;
