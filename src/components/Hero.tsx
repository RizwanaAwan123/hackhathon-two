import Image from 'next/image';

export default function Hero() {
    return (
      <section className="bg-blue-600 text-white h-screen flex items-center justify-center">
        <div className="text-center">
        <Image  src="/image.png"
         alt="profile.jp" 
         width= {400} 
         height={600}
        className= "rounded-full mx-auto mb-4"/>
        
          <h2 className="text-4xl font-bold">Hi, I&aposs;m Rizwana Awan</h2>
          <p className="mt-4 text-lg">A Passionate Web Developer</p>
          
      
        </div>
      </section>
    );
  };
  