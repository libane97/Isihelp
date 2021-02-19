package com.groupeisi.isihelp.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Question.
 */
@Entity
@Table(name = "question")
public class Question implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "cloturer")
    private Boolean cloturer;

    @OneToMany(mappedBy = "question")
    private Set<Techno> technos = new HashSet<>();

    @OneToMany(mappedBy = "question")
    private Set<Langage> langages = new HashSet<>();

    @OneToMany(mappedBy = "question")
    private Set<Commentaire> commentaires = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public Question libelle(String libelle) {
        this.libelle = libelle;
        return this;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public LocalDate getDate() {
        return date;
    }

    public Question date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Boolean isCloturer() {
        return cloturer;
    }

    public Question cloturer(Boolean cloturer) {
        this.cloturer = cloturer;
        return this;
    }

    public void setCloturer(Boolean cloturer) {
        this.cloturer = cloturer;
    }

    public Set<Techno> getTechnos() {
        return technos;
    }

    public Question technos(Set<Techno> technos) {
        this.technos = technos;
        return this;
    }

    public Question addTechno(Techno techno) {
        this.technos.add(techno);
        techno.setQuestion(this);
        return this;
    }

    public Question removeTechno(Techno techno) {
        this.technos.remove(techno);
        techno.setQuestion(null);
        return this;
    }

    public void setTechnos(Set<Techno> technos) {
        this.technos = technos;
    }

    public Set<Langage> getLangages() {
        return langages;
    }

    public Question langages(Set<Langage> langages) {
        this.langages = langages;
        return this;
    }

    public Question addLangage(Langage langage) {
        this.langages.add(langage);
        langage.setQuestion(this);
        return this;
    }

    public Question removeLangage(Langage langage) {
        this.langages.remove(langage);
        langage.setQuestion(null);
        return this;
    }

    public void setLangages(Set<Langage> langages) {
        this.langages = langages;
    }

    public Set<Commentaire> getCommentaires() {
        return commentaires;
    }

    public Question commentaires(Set<Commentaire> commentaires) {
        this.commentaires = commentaires;
        return this;
    }

    public Question addCommentaire(Commentaire commentaire) {
        this.commentaires.add(commentaire);
        commentaire.setQuestion(this);
        return this;
    }

    public Question removeCommentaire(Commentaire commentaire) {
        this.commentaires.remove(commentaire);
        commentaire.setQuestion(null);
        return this;
    }

    public void setCommentaires(Set<Commentaire> commentaires) {
        this.commentaires = commentaires;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Question)) {
            return false;
        }
        return id != null && id.equals(((Question) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Question{" +
            "id=" + getId() +
            ", libelle='" + getLibelle() + "'" +
            ", date='" + getDate() + "'" +
            ", cloturer='" + isCloturer() + "'" +
            "}";
    }
}
