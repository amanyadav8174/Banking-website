import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const  Home = () => {
    const loggedIn ={firstName:'Aman',lastName:"Yadav", email:"amanyadav2508aaa@gmail.com"};
  return (
  <section className='home'>
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'guest'}
            subtext="Access and manage your account and transaction Efficiently "
            />

            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
            
            />
        </header>
        Recent transaction
    </div>
    <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks={[{ currentBalance:1250.5} , { currentBalance:4250.5} ]}/>
  </section>
  )
}

export default  Home
