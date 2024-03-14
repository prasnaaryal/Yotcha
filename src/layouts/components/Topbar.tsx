import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Topbar = () => {
  return (
    <div>
      <div className='flex items-center'><img src="./assets/Vector.png" alt=""/><p>Yotcha</p> </div>
      <div>
        <nav >
          <Link href={"#"}>Buy</Link>
          <Link href={"#"}>Sale</Link>
          <Link href={"#"}>Rent</Link>
          <Link href={"#"}>New Projects</Link>
          <Link href={"#"}>Mortgages</Link>
        </nav>
         </div>
      <div>

      <Button>
  <Link href="#">Login</Link>
</Button>

        
         </div>
    </div>
  )
}

export default Topbar