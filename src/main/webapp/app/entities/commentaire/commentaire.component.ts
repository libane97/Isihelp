import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICommentaire } from 'app/shared/model/commentaire.model';
import { CommentaireService } from './commentaire.service';
import { CommentaireDeleteDialogComponent } from './commentaire-delete-dialog.component';

@Component({
  selector: 'jhi-commentaire',
  templateUrl: './commentaire.component.html',
})
export class CommentaireComponent implements OnInit, OnDestroy {
  commentaires?: ICommentaire[];
  eventSubscriber?: Subscription;
  isSaving = false;

  constructor(
    protected commentaireService: CommentaireService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.commentaireService.query().subscribe((res: HttpResponse<ICommentaire[]>) => (this.commentaires = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInCommentaires();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICommentaire): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInCommentaires(): void {
    this.eventSubscriber = this.eventManager.subscribe('commentaireListModification', () => this.loadAll());
  }

  delete(commentaire: ICommentaire): void {
    const modalRef = this.modalService.open(CommentaireDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.commentaire = commentaire;
  }

  previousState(): void {
   // window.history.back();
  }
  vote(commentaire: ICommentaire): void {
    this.isSaving = true;
    commentaire.vote += 1;
    this.subscribeToSaveResponse(this.commentaireService.update(commentaire));
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICommentaire>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
