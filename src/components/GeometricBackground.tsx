export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 - Curved element */}
      <div className="absolute top-20 left-10 w-32 h-32 animate-float">
        <img 
          src="/lovable-uploads/89453eaa-08d9-4484-aa84-c119d44240ee.png"
          alt=""
          className="w-full h-full object-contain opacity-20 animate-rotate"
        />
      </div>
      
      {/* Shape 2 - Diamond/Pyramid */}
      <div className="absolute top-40 right-20 w-24 h-24 animate-pulse-glow">
        <img 
          src="/lovable-uploads/6b6d25e8-46be-4b2e-a909-cb75006faca5.png"
          alt=""
          className="w-full h-full object-contain opacity-15"
        />
      </div>
      
      {/* Shape 3 - Star-like */}
      <div className="absolute bottom-40 left-1/4 w-28 h-28 animate-float">
        <img 
          src="/lovable-uploads/a6e58e2d-ca24-4578-84a1-b56cecb1121e.png"
          alt=""
          className="w-full h-full object-contain opacity-25"
        />
      </div>
      
      {/* Shape 4 - Cylindrical */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20 animate-pulse-glow">
        <img 
          src="/lovable-uploads/78bb3855-eae5-4c2b-a0b6-f41ce498f902.png"
          alt=""
          className="w-full h-full object-contain opacity-20 animate-rotate"
        />
      </div>
      
      {/* Shape 5 - Torus */}
      <div className="absolute bottom-20 right-10 w-36 h-36 animate-float">
        <img 
          src="/lovable-uploads/f223c91b-138a-4865-9ac8-6aa77705504c.png"
          alt=""
          className="w-full h-full object-contain opacity-15"
        />
      </div>
      
      {/* Shape 6 - Star/Flower pattern */}
      <div className="absolute top-1/2 left-10 w-30 h-30 animate-pulse-glow">
        <img 
          src="/lovable-uploads/19d2050f-a2ca-4e2f-8f07-4b9bf03b0352.png"
          alt=""
          className="w-full h-full object-contain opacity-20 animate-rotate"
        />
      </div>
      
      {/* Additional floating particles for ambience */}
      <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-primary/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-muted-foreground/20 rounded-full animate-pulse-glow"></div>
    </div>
  );
}