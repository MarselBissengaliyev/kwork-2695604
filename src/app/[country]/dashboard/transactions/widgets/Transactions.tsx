'use client'
import ButtonMain from '@/components/button/ButtonMain'
import PageDirect from '@/components/Common/PageDirect'
import { Container } from '@/components/Container'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import DashBoardTable from '../../entities/myBidsTable/DashboardTable'
import DashBoardTableMoblie from '../../entities/myBidsTable/DashboardTableMobile'
const Transactions = ({ paidTransactions, requestARefundTransactions, refundTransactions }) => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Возвращает на предыдущую страницу
  };

  const [activeButton, setActiveButton] = useState('Transaction List'); // Начальная активная кнопка

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  const columns = [
    { header: 'Type', accessor: 'status' },
    { header: 'Date', accessor: 'date' },
    { header: '#', accessor: 'id' },
    { header: 'Due Date', accessor: 'date' },
    { header: 'Balance', accessor: 'balance' },
    { header: 'Total', accessor: 'balance' },
    {
      header: 'Status',
      accessor: 'status',
      render: (value) => (
        <span style={{ color: value === 'Paid' ? 'green' : 'red' }}>{value}</span>
      ),
    },
  ];

  const tableColumns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Transaction Date', accessor: 'date' },
    { header: 'Transaction Type', accessor: 'status' },
    { header: 'Comments', accessor: 'comments' },
    { header: 'Amount', accessor: 'balance' },
    { header: 'Total', accessor: 'balance' },
    {
      header: 'Status',
      accessor: 'status',
      render: (value) => (
        <span style={{ color: value === 'Paid' ? 'green' : 'red' }}>{value}</span>
      ),
    },
  ];

  const refundColumns = [
    { header: 'Transaction Date', accessor: 'date' },
    { header: 'Refund Amount', accessor: 'balance' },
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
    <Container className={""}>
      <PageDirect
        pageTitle={"Transactions"}
        className={'tw-justify-between tw-gap-5 max-mindesk:tw-flex-col max-mindesk:tw-justify-start'}
      >
        <div className='tw-flex tw-gap-10 tw-overflow-x-auto tw-w-full no-scrollbar max-mindesk:tw-gap-2'>
          <div className='tw-flex tw-gap-2'>
            <ButtonMain
              key={"Back"}
              classNames={'tw-w-[170px] tw-flex-shrink-0'}
              variant='outline'
              color="grey"
              text={
                <div className='tw-flex tw-gap-2 tw-text-center tw-items-center'>
                  <img src='/images/dashboard/icons/larrow.png' />
                  Back
                </div>
              }
              onClick={() => goBack()}
            />

            <ButtonMain
              classNames={'tw-w-[208px] tw-flex-shrink-0'}
              color={activeButton === "Transaction List" ? "blue" : "grey"}
              variant='outline'
              text="Transaction List"
              onClick={() => handleButtonClick("Transaction List")} />

            <ButtonMain
              classNames={'tw-w-[208px] tw-flex-shrink-0'}
              text="Request a Refund"
              color={activeButton === "Request a Refund" ? "blue" : "grey"}
              variant='outline'
              onClick={() => handleButtonClick("Request a Refund")} />

            <ButtonMain
              classNames={'tw-w-[170px] tw-flex-shrink-0'}
              color={activeButton === "Refund" ? "blue" : "grey"}
              variant='outline'
              text="Refund"
              onClick={() => handleButtonClick("Refund")} />
          </div>
          <div className='tw-flex tw-gap-2'>
            <a href="../EditSettings">
              <ButtonMain
                classNames={'tw-w-[170px] tw-flex-shrink-0 tw-flex tw-gap-2'}
                color='grey'
                variant='outline'
                text="Edit Profile"
                icon="/images/dashboard/icons/editing.png" />
            </a>
          </div>
        </div>
      </PageDirect>
      <div className='max-mindesk:tw-hidden'>
        <DashBoardTable
          data={
            activeButton === "Transaction List"
              ? { ...paidTransactions, array: paidTransactions.transactions }
              : activeButton === "Request a Refund"
                ? { ...requestARefundTransactions, array: requestARefundTransactions.transactions }
                : activeButton === "Refund"
                  ? { ...refundTransactions, array: refundTransactions.transactions }
                  : { array: [], pages: 0, results: 0 }
          }
          columns={
            activeButton === "Transaction List"
              ? columns
              : activeButton === "Request a Refund"
                ? tableColumns
                : activeButton === "Refund"
                  ? refundColumns
                  : []
          }
          rowKey="vin"
        />;
      </div>

      <div className='mindesk:tw-hidden'>
        <DashBoardTableMoblie columns={
          activeButton === "Transaction List"
            ? columns
            : activeButton === "Request a Refund"
              ? tableColumns
              : activeButton === "Refund"
                ? refundColumns
                : []
        } data={
          activeButton === "Transaction List"
            ? { ...paidTransactions, array: paidTransactions.transactions }
            : activeButton === "Request a Refund"
              ? { ...requestARefundTransactions, array: requestARefundTransactions.transactions }
              : activeButton === "Refund"
                ? { ...refundTransactions, array: refundTransactions.transactions }
                : { array: [], pages: 0, results: 0 }
        } rowKey="vin" />
      </div>
    </Container>
  )
}

export default Transactions