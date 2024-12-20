import { TreeNodeCheckState } from '@/presentation/components/Scripts/View/Tree/TreeView/Node/State/CheckState';
import type { TreeNodeStateTransaction } from '@/presentation/components/Scripts/View/Tree/TreeView/Node/State/StateAccess';
import type { TreeNodeStateDescriptor } from '@/presentation/components/Scripts/View/Tree/TreeView/Node/State/StateDescriptor';
import { TreeNodeStateDescriptorStub } from './TreeNodeStateDescriptorStub';

export class TreeNodeStateTransactionStub implements TreeNodeStateTransaction {
  public withExpansionState(isExpanded: boolean): TreeNodeStateTransaction {
    this.updatedState = { ...this.updatedState, isExpanded };
    return this;
  }

  public withMatchState(isMatched: boolean): TreeNodeStateTransaction {
    this.updatedState = { ...this.updatedState, isMatched };
    return this;
  }

  public withFocusState(isFocused: boolean): TreeNodeStateTransaction {
    this.updatedState = { ...this.updatedState, isFocused };
    return this;
  }

  public withVisibilityState(isVisible: boolean): TreeNodeStateTransaction {
    this.updatedState = { ...this.updatedState, isVisible };
    return this;
  }

  public withCheckState(checkState: TreeNodeCheckState): TreeNodeStateTransaction {
    this.updatedState = { ...this.updatedState, checkState };
    return this;
  }

  public updatedState: Partial<TreeNodeStateDescriptor> = new TreeNodeStateDescriptorStub();
}
