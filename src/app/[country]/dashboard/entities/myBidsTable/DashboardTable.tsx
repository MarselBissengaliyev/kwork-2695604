'use client';
import { Container } from '@/components/Container';
import React from 'react';

interface TableRow {
  id: number;
  amount: number;
  lot_id: number;
  user_id: number;
  created_at: string;
  status: string;
}

interface IDashboardTable {
  titles: string[]; // Заголовки таблицы
  variables: TableRow[]; // Данные в формате объекта
  renderValue?: (key: keyof TableRow, value: any, row: TableRow) => React.ReactNode; // Кастомный рендер значений
  onEdit?: (key: keyof TableRow, value: any, row: TableRow) => void; // Обработчик редактирования
}

const DashboardTable: React.FC<IDashboardTable> = ({ titles, variables, renderValue, onEdit }) => {
  return (
    <Container>
      <div className="tw-w-full tw-border tw-rounded-lg">
        {/* Заголовки */}
        <div className="tw-flex tw-w-full tw-justify-between tw-border-b tw-py-2">
          {titles.length > 0 
            ? titles.map((title, index) => (
                <p key={index} className="tw-flex-1 tw-text-center">
                  {title || '—'}
                </p>
              ))
            : <p className="tw-flex-1 tw-text-center">No Titles</p>}
        </div>

        {/* Данные */}
        {variables.length > 0 ? (
          variables.map((row, rowIndex) => (
            <div
              key={row.id}
              className="tw-flex tw-w-full tw-justify-between tw-py-2"
            >
              {Object.entries(row).map(([key, value]) => (
                <div key={key} className="tw-flex-1 tw-text-center tw-px-2">
                  {renderValue
                    ? renderValue(key as keyof TableRow, value, row)
                    : value}

                  {onEdit && (
                    <button
                      onClick={() => onEdit(key as keyof TableRow, value, row)}
                      className="tw-ml-2 tw-text-blue-500"
                      aria-label={`Edit ${key} in row ${rowIndex + 1}`}
                    >
                      Edit
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="tw-text-center tw-py-4">No Data</p>
        )}
      </div>
    </Container>
  );
};

export default DashboardTable;
