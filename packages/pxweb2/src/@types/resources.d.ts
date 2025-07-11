interface Resources {
  translation: {
    meta: {
      languageName: 'English';
      shorthand: 'en';
    };
    common: {
      title: 'PxWeb 2.0';
      header: {
        title: 'PxWeb 2.0 [Main]';
        logo: 'PxWeb 2.0';
      };
      not_found: {
        page_not_found: {
          title: 'Page not found';
          description: 'The page you are looking for does not exist. Please check the URL or return to the homepage.';
        };
        unsupported_language: {
          title: 'Unsupported language';
          description: 'The selected language is not supported.';
        };
      };
      skip_to_main: 'Skip to main content';
      footer: {
        contact: {
          title: 'Contact';
          description: 'Description text...';
        };
        about: {
          title: 'About';
          description: 'Description text...';
        };
        accessibility: {
          title: 'Accessibility';
          description: 'Description text...';
        };
        version: {
          title: 'Version';
          description: 'Description text...';
        };
      };
      generic_buttons: {
        ok: 'OK';
        cancel: 'Cancel';
        save: 'Save';
        search: 'Search';
        close: 'Close';
      };
      generic_tags: {
        mandatory: 'Mandatory';
      };
      alert: {
        info: 'Information:';
        success: 'Success:';
        warning: 'Warning:';
        error: 'Error:';
      };
    };
    start_page: {
      header: 'Welcome to PxWeb 2.0';
      ingress: "Looking for the perfect table? Use the search field and filters to dig into the numbers you need. Whether you're hunting for trends, facts, or just an oddly satisfying dataset, PxWeb 2.0 has your back.";
      more_about_label: 'More about PxWeb 2.0';
      more_about_text: 'More about Text EN';
      search_placeholder: 'Search in PxWeb 2.0';
      filter: {
        button: 'Filter';
        back: 'Back';
        show_results: 'Show {{value}} results';
        close: 'Close filter';
        header: 'Filter';
        remove_all_filter: 'Remove all filters';
        remove_filter_aria: 'Remove filter, {{value}}';
        subject: 'Topic';
        timeUnit: 'Time period';
        year: 'Year';
        variabel: 'Variable';
        frequency: {
          annual: 'Year';
          monthly: 'Month';
          quarterly: 'Quarter';
          term: 'Term';
          weekly: 'Week';
          other: 'Other';
        };
      };
      table: {
        number_of_tables: '<strong>{{count}}</strong> tables';
        number_of_tables_found: '<strong>{{count}}</strong> tables found';
        updated_label: 'Updated';
        show_more: 'Show more';
        show_less: 'Show less';
        loading: 'Loading...';
        show_number_of_tables: 'Showing  <countShown> of <countTotal>';
        show_number_of_tables_aria: '<number of> tables found, Showing  <countShown> of <countTotal>';
      };
    };
    presentation_page: {
      header: {
        searchbutton: 'Search';
        languagebutton: 'languages';
        statistics: 'Statistikkbanken';
      };
      sidemenu: {
        arialabeltoolsidemenu: 'Tool menu for table';
        hide: 'Hide';
        selection: {
          title: 'Filter';
          variablebox: {
            search: {
              placeholder: 'Search in list';
              label: 'Search';
              arialabelicontext: 'Search icon';
              ariallabelclearbuttontext: 'Clear search icon';
            };
            header: {
              tag_selected: '{{selected}} of {{total}} selected';
              tag_mandatory: 'Mandatory';
              alert_no_mandatory_values: 'You must select something in the list for the table to be displayed';
            };
            content: {
              select: {
                label: 'Select grouping';
                placeholder: 'Nothing selected';
                modal: {
                  cancel_button: 'Cancel';
                  confirm_button: 'Save';
                };
              };
              mixed_checkbox: {
                select_all: 'Select all';
                deselect_all: 'Deselect all';
              };
              values_list: {
                aria_label: 'List of {{total}} values.';
                no_results_heading: 'No results for “{{search}}”';
                no_results_bodyshort: 'Try a different keyword or spelling.';
              };
            };
          };
        };
        view: {
          title: 'Display';
          table: {
            title: 'Table';
          };
          graph: {
            title: 'Graph';
          };
        };
        edit: {
          title: 'Edit';
          customize: {
            title: 'Customize';
            pivot: {
              title: 'Pivot';
            };
            rearrange: {
              title: 'Rearrange table';
              description: 'Description text...';
            };
            change_order: {
              title: 'Change order';
              description: 'Description text...';
            };
          };
          calculate: {
            title: 'Calculate';
            sum: {
              title: 'Sum';
              description: 'Description text...';
            };
          };
          hide_display: {
            title: 'Hide/display';
          };
        };
        save: {
          title: 'Save';
          file: {
            title: 'Save as file';
            excel: 'Excel (.xlsx)';
            csv: 'Semicolon-delimited with heading (.csv)';
            'relational-csv': 'Relational table (.csv)';
            px: 'PC-Axis (.px)';
            jsonstat2: 'JSON-stat2 (.json)';
            html: 'HTML (.html)';
            parquet: 'Parquet (.parquet)';
          };
          imagefile: {
            title: 'Save as graph';
            png: 'Chart (png)';
          };
          link: {
            title: 'Save as link';
            description: 'Description text...';
          };
          api: {
            title: 'API';
            description: 'Description text...';
          };
        };
        help: {
          title: 'Help';
        };
      };
      main_content: {
        arialabelbreadcrumb: 'Breadcrumb';
        last_updated: 'Last updated';
        show_details: 'Show details';
        dynamic_table_title: '{{table_content_type}} by {{table_content_label_first_part}} and {{table_content_label_last_part}}';
        table: {
          warnings: {
            missing_mandatory: {
              title: 'The table cannot be displayed';
              description: 'You must select something in the filter';
            };
            to_many_values_selected: {
              title: 'The table is too large and cannot be updated';
              description1: 'Your current selection makes ';
              description2: ' cells, while the table can display a maximum of ';
              description3: ' cells. Reduce the number of selections in the filter, and once this message disappears, the table will update as usual.';
              selectedCells: '{{selectedCells}}';
              maxCells: '{{maxCells}}';
            };
          };
        };
        about_table: {
          title: 'Information';
          footnotes: {
            title: 'Notes';
            missing_heading: 'No notes';
            missing_text_table: 'The table has no notes.';
            missing_text_selection: 'There are no notes for the selected filtering.';
            symbol_explanation_heading: 'Symbol explanation';
            mandatory_heading: 'Important about the table';
            mandatory_variable_heading: 'Important about';
            non_mandatory_heading: 'For the entire table';
            show_all_footnotes: 'Show all notes for table';
            important_about_selection_heading_1: 'There are ';
            important_about_selection_heading_2: ' important notes for your selection';
            important_about_selection_body: 'Click on this message to read the notes.';
            important_about_selection_heading_one_note_1: 'There is ';
            important_about_selection_heading_one_note_2: ' important note for your selection';
            important_about_selection_body_one_note: 'Click on this message to read the note.';
          };
          definitions: {
            title: 'Definitions';
            description: 'The table is part of the statistics {{statistics}}';
          };
          details: {
            title: 'Details';
            description: 'Description text...';
            boolean_true: 'Yes';
            boolean_false: 'No';
            base_time: 'Base time';
            update_frequency: 'Update frequency';
            survey: 'Survey';
            link: 'Link';
            copyright: 'Copyright';
            matrix: 'Matrix';
            last_updated: 'Last updated';
            next_update: 'Next update';
            source: 'Source';
            official_statistics: 'Official statistics';
            unit: 'Unit';
            reference_time: 'Reference time';
          };
          contact: {
            title: 'Contact';
            description: 'Description text...';
            missing_heading: 'No contact information';
            missing_text: 'The table has no contact information.';
          };
        };
        related: {
          title: 'Related';
          description: 'Description text...';
        };
      };
      footer: {
        description: 'On this site you can follow as Statistics Sweden (SCB) and Statistics Norway (SSB) are building a new and more user-friendly interface for PxWeb.';
        descriptionLink: 'Read more about the project on Github';
        contact: 'Contact';
        projectLeader: 'Project leader';
        scrumMaster: 'Scrum master';
        copyright: 'Copyright © 2024 Statistics Sweden and Statistics Norway';
      };
    };
    date: {
      simple_date: '{{value, datetime}}';
      simple_date_with_time: "{{value, datetime(year: 'numeric'; month: 'numeric'; day: 'numeric'; hour: 'numeric'; minute: 'numeric')}}";
    };
    number: {
      simple_number: '{{value, pxNumber}}';
      simple_number_with_zero_decimal: '{{value, pxNumber(minimumFractionDigits: 0; maximumFractionDigits: 0;)}}';
      simple_number_with_one_decimal: '{{value, pxNumber(minimumFractionDigits: 1; maximumFractionDigits: 1;)}}';
      simple_number_with_two_decimals: '{{value, pxNumber(minimumFractionDigits: 2; maximumFractionDigits: 2;)}}';
      simple_number_with_three_decimals: '{{value, pxNumber(minimumFractionDigits: 3; maximumFractionDigits: 3;)}}';
      simple_number_with_four_decimals: '{{value, pxNumber(minimumFractionDigits: 4; maximumFractionDigits: 4;)}}';
      simple_number_with_five_decimals: '{{value, pxNumber(minimumFractionDigits: 5; maximumFractionDigits: 5;)}}';
      simple_number_with_default_formatter: "{{value, number(minimumFractionDigits: 5; maximumFractionDigits: 5; roundingMode: 'halfExpand')}}";
    };
  };
}

export default Resources;
