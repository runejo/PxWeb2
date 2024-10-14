import { render } from '@testing-library/react';

import VariableBoxList from './VariableList';
import { PxTableMetadata } from '../../shared-types/pxTableMetadata';
import { VartypeEnum } from '../../shared-types/vartypeEnum';

const mockPxTableMetadataSingle: PxTableMetadata = {
  id: '1',
  label: 'Mock Table',
  updated: new Date(),
  variables: [
    {
      id: '1',
      label: 'Test Variable 1',
      mandatory: false,
      values: [
        {
          code: '2',
          label: 'Test Variable 1 Value 1',
        },
        {
          code: '3',
          label: 'Test Variable 1 Value 2',
        },
      ],
      codeLists: [],
      type: VartypeEnum.CONTENTS_VARIABLE,
    },
  ],
};
const mockPxTableMetadataMultiple: PxTableMetadata = {
  id: '1',
  label: 'Mock Table',
  updated: new Date(),
  variables: [
    {
      id: '1',
      label: 'Test Variable',
      mandatory: false,
      values: [
        {
          code: '1',
          label: 'Test Value',
        },
      ],
      codeLists: [],
      type: VartypeEnum.CONTENTS_VARIABLE,
    },
    {
      id: '2',
      label: 'Test Variable 2',
      mandatory: false,
      values: [
        {
          code: '2',
          label: 'Test Variable 2 Value 1',
        },
        {
          code: '3',
          label: 'Test Variable 2 Value 2',
        },
      ],
      codeLists: [],
      type: VartypeEnum.CONTENTS_VARIABLE,
    },
  ],
};

describe('VariableBoxList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VariableBoxList
        pxTableMetadata={mockPxTableMetadataSingle}
        isLoadingMetadata={false}
        hasLoadedDefaultSelection={false}
        selectedVBValues={[]}
        handleCodeListChange={() => {
          return;
        }}
        handleCheckboxChange={() => {
          return;
        }}
        handleMixedCheckboxChange={() => {
          return;
        }}
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render a VariableBox for each variable in the metadata', () => {
    const { getByText } = render(
      <VariableBoxList
        pxTableMetadata={mockPxTableMetadataMultiple}
        isLoadingMetadata={false}
        hasLoadedDefaultSelection={true}
        selectedVBValues={[]}
        handleCodeListChange={() => {
          return;
        }}
        handleCheckboxChange={() => {
          return;
        }}
        handleMixedCheckboxChange={() => {
          return;
        }}
      />
    );

    expect(getByText('Test Variable')).toBeTruthy();
    expect(getByText('Test Variable 2')).toBeTruthy();
  });

  /* TODO: Fix this test
   it('should render a VariableBox with the correct values', () => {
    const { getByText } = render(
      <VariableBoxList
        pxTableMetadata={mockPxTableMetadataSingle}
        isLoadingMetadata={false}
        hasLoadedDefaultSelection={true}
        selectedVBValues={[]}
        handleCodeListChange={() => {
          return;
        }}
        handleCheckboxChange={() => {
          return;
        }}
        handleMixedCheckboxChange={() => {
          return;
        }}
      />
    );

    expect(getByText('Test Variable 1 Value 1')).toBeTruthy();
    expect(getByText('Test Variable 1 Value 2')).toBeTruthy();
  }); */

  /*
TODO: Fix this test
it('should only render the values for the first VariableBox', () => {
    const { getByText, queryByText } = render(
      <VariableBoxList
        pxTableMetadata={mockPxTableMetadataMultiple}
        isLoadingMetadata={false}
        hasLoadedDefaultSelection={true}
        selectedVBValues={[]}
        handleCodeListChange={() => {
          return;
        }}
        handleCheckboxChange={() => {
          return;
        }}
        handleMixedCheckboxChange={() => {
          return;
        }}
      />
    );
    expect(getByText('Test Value')).toBeTruthy();
    expect(queryByText('Test Variable 2 Value 1')).toBeNull();
    expect(queryByText('Test Variable 2 Value 2')).toBeNull();
  }); */
});