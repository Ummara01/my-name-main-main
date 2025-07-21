'use client';
import { useEffect } from 'react';
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-block w-100 position-relative" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/imge/แมว1.jpg"
              alt="แมว1"
              fill
              className="object-fit-cover"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-block w-100 position-relative" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/imge/แมว2.jpg"
              alt="แมว2"
              fill
              className="object-fit-cover"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-block w-100 position-relative" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/imge/แมว3.jpg"
              alt="แมว3"
              fill
              className="object-fit-cover"
            />
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
