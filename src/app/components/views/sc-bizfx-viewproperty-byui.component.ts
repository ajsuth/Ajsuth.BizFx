import { Component, Input, OnInit } from '@angular/core';

import { Angular2Csv } from 'angular2-csv/Angular2-csv';

import { ScBizFxProperty, ScBizFxView, ScBizFxPolicy } from '@sitecore/bizfx';

/**
 * BizFx View Property By UiType `Component`
 *
 */
@Component({
  selector: 'sc-bizfx-viewproperty-byui',
  templateUrl: './sc-bizfx-viewproperty-byui.component.html'
})

export class ScBizFxViewPropertyByUiComponent implements OnInit {
  /**
    * Defines the property to be render
    */
  @Input() property: ScBizFxProperty;
  /**
    * Defines the view
    */
  @Input() view: ScBizFxView;
  /**
    * Defines if the property's header should be display or not.
    */
  @Input() hideHeader: boolean;
  /**
      * @ignore
      */
  list: any[];

  /**
    * @ignore
    */
  ngOnInit(): void {
    if (this.property.UiType === 'List'
      && this.property.Value !== null
      && this.property.Value !== undefined) {
      this.list = JSON.parse(this.property.Value);
    }
  }

  /**
     * Calls `Angular2Csv` to generate and donwload a csv file
     */
  downloadCsv() {
    return new Angular2Csv(JSON.parse(this.property.Value), `${this.property.Name}`);
  }

  /**
    * @ignore
    */
  buildSubItemLink(): string {
    const parts = this.view.ItemId.split('|');
    if (parts.length === 2) {
      return `${parts[0]}/${parts[1]}`;
    }

    console.warn('Invalid sub-item link format. Expected: view.Item = \'entityId|subItemId\'');

    // Use regular item link format as a fallback
    return `${this.view.EntityId}/${this.view.ItemId}`;
  }

  /**
    * @ignore
    */
  getTargetPolicy(): ScBizFxPolicy {
    return this.property.Policies.find(p => p.PolicyId === 'Target');
  }

  /**
    * @ignore
    */
  hasTarget(): boolean {
    let viewPolicy = this.getTargetPolicy();
    return viewPolicy !== undefined && viewPolicy !== null;
  }

  /**
    * @ignore
    */
  getTarget(): string {
    let viewPolicy = this.getTargetPolicy();
    if (viewPolicy !== undefined && viewPolicy !== null && viewPolicy.Models[0] !== undefined) {
      return viewPolicy.Models[0].Name;
    }
      else {
      return '';
    }
  }
}
