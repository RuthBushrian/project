import Graf from './Dashboard/graf';
import GetLasts from './Dashboard/lastFiles';
import Fake from './Dashboard/fake';
import Active from './Dashboard/active';
import Check from './Dashboard/check';
import OurCalendar from './Dashboard/calander';

export default function Dashboard() {

    return (
         <div class="card">
            <div class="card-container blue-container overflow-hidden"></div>
               
                <div class="flex">
                    <OurCalendar class="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></OurCalendar>
                    <Fake class="flex1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></Fake> 
                    <Active class="flex1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></Active>
                    <Check class="flex1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></Check>
                   
                </div>
                <div class="flex">
                    <Graf class="flex1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></Graf>
                    <GetLasts class="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round"></GetLasts>
                </div>
                {/* <div class="flex">
                    
                </div> */}
        </div>

    )
}

