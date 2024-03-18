import { Injectable } from '@nestjs/common';
import { allTokens } from 'src/utils/compiler/lexer';
import { evaluateArithmeticExpression } from 'src/utils/compiler/visitor';

@Injectable()
export class EditorService {
  getKeywords() {
    return allTokens
      .map((token) => {
        if (token.LONGER_ALT && token.name) {
          return { name: token.name };
        }
      })
      .filter(Boolean);
  }

  getOperators() {
    return allTokens
      .map((token) => {
        if (
          !token.LONGER_ALT &&
          ![
            'WhiteSpace',
            'ArithmeticOperator',
            'MultiOperator',
            'Identifier',
            'LParen',
            'RParen',
            'NumberLiteral'
          ].includes(token.name)
        ) {
          return { name: token.name };
        }
      })
      .filter(Boolean);
  }

  getSubjectAndProps() {
    return [
      {
        name: 'Employee',
        type: 'Subject',
        subject: null
      },
      {
        name: 'EmployeeID',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeName',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeAge',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeSalary',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeDepartment',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeDesignation',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeJoiningDate',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeLeavingDate',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeStatus',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeManager',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeSupervisor',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeTeam',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeLocation',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeExperience',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEducation',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeCertifications',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeSkills',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeLanguages',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeNationality',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeMaritalStatus',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeGender',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeBloodGroup',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeReligion',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEthnicity',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeDisability',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEmergencyContact',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEmergencyContactName',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEmergencyContactRelation',
        type: 'Property',
        subject: 'Employee'
      },
      {
        name: 'EmployeeEmergencyContactNumber',
        type: 'Property',
        subject: 'Employee'
      }
    ];
  }

  compile(body: { code: string }) {
    return evaluateArithmeticExpression(body.code);
  }
}
