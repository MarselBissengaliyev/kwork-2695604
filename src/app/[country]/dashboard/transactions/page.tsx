'use client'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React, { useState } from 'react'
import DashboardTable from '../entities/myBidsTable/DashboardTable'
import { useRouter } from 'next/navigation'
import DashBoardTable from '../entities/myBidsTable/DashboardTable'
import DashBoardTableMoblie from '../entities/myBidsTable/DashboardTableMobile'

const page = () => {
  const router = useRouter();
    
    const goBack = () => {
        router.back(); // Возвращает на предыдущую страницу
    };

    const [activeButton, setActiveButton] = useState('Transaction List'); // Начальная активная кнопка
    
      const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      }

      const mockData = [
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          type: 'Invoice',
          date: '21.03.2022',
          number: '#1248',
          dueDate: '24.03.2022',
          balance: '$150',
          total: '$15,000',
          status: 'Not paid',
        },
      ];
      
      const columns = [
        { header: 'Type', accessor: 'type' },
        { header: 'Date', accessor: 'date' },
        { header: '#', accessor: 'number' },
        { header: 'Due Date', accessor: 'dueDate' },
        { header: 'Balance', accessor: 'balance' },
        { header: 'Total', accessor: 'total' },
        {
          header: 'Status',
          accessor: 'status',
          render: (value) => (
            <span style={{ color: value === 'Paid' ? 'green' : 'red' }}>{value}</span>
          ),
        },
      ];
      
      const transactionData = [
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Not paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
        {
          id: '175611',
          date: '21.03.2022',
          type: '#1248',
          comments: 'Return my money!',
          amount: '$150',
          total: '$15,000',
          status: 'Paid',
        },
      ];
      
      const tableColumns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Transaction Date', accessor: 'date' },
        { header: 'Transaction Type', accessor: 'type' },
        { header: 'Comments', accessor: 'comments' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Total', accessor: 'total' },
        {
          header: 'Status',
          accessor: 'status',
          render: (value) => (
            <span style={{ color: value === 'Paid' ? 'green' : 'red' }}>{value}</span>
          ),
        },
      ];

      const refundData = [
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
        {
          transactionDate: '21.03.2022',
          refundAmount: '$150',
          comments: 'Return my money!',
          status: 'Paid',
        },
      ];
      
      const refundColumns = [
        { header: 'Transaction Date', accessor: 'transactionDate' },
        { header: 'Refund Amount', accessor: 'refundAmount' },
        { header: 'Comments', accessor: 'comments' },
        {
          header: 'Status',
          accessor: 'status',
          render: (value) => (
            <span style={{ color: value === 'Paid' ? 'green' : 'red' }}>{value}</span>
          ),
        },
      ];
      
      

  return (
    <Container>
        <PageDirect
        pageTitle={"Transactions"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
        >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
            <div className='tw-flex tw-gap-2'>
                <ButtonMain 
                  key={"Back"}
                  classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                  variant='outlined' 
                  color="grey" 
                  text={
                    <div className='tw-flex tw-gap-2 tw-text-center tw-items-center'>
                      <img src='/images/dashboard/icons/larrow.png'/> 
                      Back
                    </div>
                  }
                  onClick={() => goBack()}
                />

                <ButtonMain 
                  classNames={'tw-w-[208px] tw-flex-shrink-0'} 
                  color={activeButton === "Transaction List" ? "blue" : "grey"} 
                  variant='outlined' 
                  text="Transaction List" 
                  onClick={() => handleButtonClick("Transaction List")}/>

                <ButtonMain 
                  classNames={'tw-w-[208px] tw-flex-shrink-0'} 
                  text="Request a Refund" 
                  color={activeButton === "Request a Refund" ? "blue" : "grey"}
                  variant='outlined' 
                  onClick={() => handleButtonClick("Request a Refund")}/>

                <ButtonMain 
                  classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                  color={activeButton === "Refund" ? "blue" : "grey"}
                  variant='outlined' 
                  text="Refund" 
                  onClick={() => handleButtonClick("Refund")}/>
            </div>
            <div className='tw-flex tw-gap-2'>
            <a href="../EditSettings">
              <ButtonMain 
                classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'} 
                color='grey' 
                variant='outlined' 
                text="Edit Profile" 
                icon="/images/dashboard/icons/editing.png" />
            </a>
            </div>
        </div>
        </PageDirect>
        <div className='max-mindesk:tw-hidden'>
          <DashBoardTable data={ activeButton === "Transaction List" ? mockData : activeButton === "Request a Refund" ? transactionData : activeButton === "Refund" ? refundData : []} columns={activeButton === "Transaction List" ? columns : activeButton === "Request a Refund" ? tableColumns : activeButton === "Refund" ? refundColumns : []} rowKey="vin" />;
        </div>
        <div className='mindesk:tw-hidden'>
          <DashBoardTableMoblie data={ activeButton === "Transaction List" ? mockData : activeButton === "Request a Refund" ? transactionData : activeButton === "Refund" ? refundData : []} columns={activeButton === "Transaction List" ? columns : activeButton === "Request a Refund" ? tableColumns : activeButton === "Refund" ? refundColumns : []} rowKey="vin" />
        </div>
    </Container>
  )
}

export default page